import { Component, signal } from '@angular/core';
import { FaqItem } from '../../../../shared/models/faq-item';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  imports: [EvoButton, FontAwesomeModule, ToFaIconPipe],
})
export class Faq {
  openIndex = signal<number | null>(0); // Ouvre le 1er par défaut

  faqItems: FaqItem[] = [
    {
      question: "Combien coûte la création d'un site web ou d'une application ?",
      answer:
        "Chaque projet est unique. Un site vitrine simple démarre à partir de X€, tandis qu'une application complexe demande un chiffrage précis. Contactez-nous pour un devis gratuit et détaillé sous 48h.",
    },
    {
      question: 'Combien de temps faut-il pour développer mon projet ?',
      answer:
        'En moyenne, comptez 4 à 8 semaines pour un site web et 3 à 6 mois pour une application mobile complète. Nous travaillons en méthode Agile pour vous livrer des versions testables régulièrement.',
    },
    {
      question: 'Assurez-vous la maintenance après la mise en ligne ?',
      answer:
        'Absolument. Nous proposons des forfaits de maintenance (TMA) pour garantir la sécurité, les mises à jour et les évolutions de votre solution sur le long terme.',
    },
    {
      question: 'Je suis en France, comment allons-nous collaborer ?',
      answer:
        "La distance n'est pas un frein. Nous utilisons Slack, Trello et Google Meet pour communiquer quotidiennement. Vous avez un chef de projet dédié qui est votre interlocuteur unique.",
    },
    {
      question: 'Puis-je mettre à jour mon site moi-même ?',
      answer:
        "Oui ! Nous développons des interfaces d'administration sur-mesure ou utilisons des CMS headless qui vous permettent de modifier vos textes et images en toute autonomie.",
    },
    {
      question: 'Puis-je mettre à jour mon site moi-même ?',
      answer:
        "Oui ! Nous développons des interfaces d'administration sur-mesure ou utilisons des CMS headless qui vous permettent de modifier vos textes et images en toute autonomie.",
    },
  ];

  toggle(index: number) {
    if (this.openIndex() === index) {
      this.openIndex.set(null); // Ferme si déjà ouvert
    } else {
      this.openIndex.set(index); // Ouvre le nouveau
    }
  }
}
