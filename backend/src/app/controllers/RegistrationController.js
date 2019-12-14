import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Registration from '../Models/Registration';
import CreateRegistrationService from '../services/registration/CreateRegistrationService';
import UpdateRegistrationService from '../services/registration/UpdateRegistrationService';
import DeleteRegistrationService from '../services/registration/DeleteRegistrationService';
import Student from '../Models/Student';
import Plan from '../Models/Plan';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title'],
        },
      ],
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
    });

    return res.json(
      registrations.map(item => ({
        id: item.id,
        price: item.price,
        active: item.active,
        plan: item.plan.title,
        student: item.student.name,
        start_date: format(item.start_date, "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        end_date: format(item.end_date, "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
      }))
    );
  }

  async store(req, res) {
    try {
      const registration = await CreateRegistrationService.run({
        registration: req.body,
      });

      return res.json(registration);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const registration = await UpdateRegistrationService.run({
        registrationId: req.params.id,
        newRegistration: req.body,
      });

      return res.json(registration);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await DeleteRegistrationService.run({
        registrationId: req.params.id,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new RegistrationController();