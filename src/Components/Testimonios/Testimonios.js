import "./Testimonios.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

const Testimonios = ({ t }) => {

  const testimonials = [
    {
      id: 1,
      name: t('main.testimonials.testimonial1.name'),
      comment: t('main.testimonials.testimonial1.comment'),
      rating: 5,
      country: t('main.testimonials.testimonial1.country'),
    },
    {
      id: 2,
      name: t('main.testimonials.testimonial2.name'),
      comment: t('main.testimonials.testimonial2.comment'),
      rating: 5,
      country: t('main.testimonials.testimonial2.country'),
    },
    {
      id: 3,
      name: t('main.testimonials.testimonial3.name'),
      comment: t('main.testimonials.testimonial3.comment'),
      rating: 5,
      country: t('main.testimonials.testimonial3.country'),
    },
    {
      id: 4,
      name: t('main.testimonials.testimonial4.name'),
      comment: t('main.testimonials.testimonial4.comment'),
      rating: 5,
      country: t('main.testimonials.testimonial4.country'),
    },
  ];

  // const renderStars = (rating) => {
  //   return [...Array(rating)].map((_, i) => (
  //     <FontAwesomeIcon key={i} icon={faStar} className="star" />
  //   ));
  // };

  return (
    <section id="testimonios">
      <div className="testimonios-container">
        <h2>
          <Trans i18nKey="main.testimonials.title">
            Lo que dicen mis <span className="highlight">estudiantes</span>
          </Trans>
        </h2>

        <div className="testimonios-box-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonios-box">
              <div className="testimonios-header">
                <div className="testimonios-info">
                  <div className="testimonial-avatar">
                    {testimonial.name[ 0 ]}
                  </div>
                  <div className="testimonios-name">
                    <h4>{testimonial.name}</h4>
                    <p className="country">{testimonial.country}</p>
                  </div>
                </div>
              </div>
              <p className="testimonios-comment">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        <div className="italki-cta">
          <p>See more reviews from students around the world.</p>
          <a
            href="PERFIL_ITALKI"
            target="_blank"
            rel="noopener noreferrer"
          >
            View italki profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
