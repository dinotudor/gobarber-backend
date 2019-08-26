import { format } from 'date-fns';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  // task to be executed
  async handle({ data }) {
    const { appointment } = data;

    await Mail.sendMail({
      to: `${appointment.provider.name}<${appointment.provider.email}>`,
      subject: 'Appointment canceled',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(appointment.date, "'The' dd 'of' MMMM', at' H:mm'h'"),
      },
    });
  }
}

export default new CancellationMail();
