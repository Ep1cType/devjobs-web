import React from 'react';
import {useParams} from "react-router-dom";

import s from './CompanyPage.module.scss';

const CompanyPage = () => {

  const {id} = useParams()

  return (
    <>
      <div className={s.companyHeader}>
        <div className={s.container}>
          <div className={s.companyHeader__content}>
            <div className={s.company__avatar}>
              <img className={s.company__avatar__img} src="https://i.ibb.co/p2tbsDF/3.png" alt="test" />
            </div>
            <div className={s.company__menu}>
              <div className={s.company__menu__desc}>
                <h2 className={s.company__name}>Scoot</h2>
                <span className={s.company__site}>scoot.com</span>
              </div>
              <div className={s.company__menu__nav}>
                <button className={s.company__button}>
                  Company Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.companyInfo}>
        <div className={s.container}>
          <div className={s.companyInfo__content}>
            <div className={s.companyInfo__header}>
              <div className={s.companyInfo__desc}>
                <h3 className={s.companyInfo__time}>
                  1w ago . Part Time
                </h3>
                <h1 className={s.companyInfo__vocation}>
                  Senior Software Engineer
                </h1>
                <h3 className={s.companyInfo__location}>
                  United Kingdom
                </h3>
              </div>
              <div className={s.companyInfo__nav}>
                <button className={s.companyInfo__nav__button}>
                  Apply Now
                </button>
              </div>
            </div>
            <div className={s.companyInfo__about}>
              <p className={s.companyInfo__about__value}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dicta distinctio minima mollitia optio reiciendis reprehenderit, saepe veniam!
                Debitis dolor esse fuga laboriosam laudantium perspiciatis temporibus.
                Atque consequuntur id laborum officia pariatur qui, repellat. Adipisci assumenda aut autem doloremque,
                eaque facere fuga fugit id impedit in ipsam, libero magnam molestiae nulla obcaecati odio perferendis placeat
                praesentium quas quo reprehenderit repudiandae sit ullam unde voluptas voluptatibus voluptatum! Accusamus,
                aliquam dolor et eum iusto maxime modi necessitatibus non. Accusantium aut consequuntur, cupiditate dicta ducimus
                iusto molestiae nam odit omnis optio possimus reprehenderit sequi sunt suscipit, veritatis vero voluptates voluptatum?
                Aliquid id in voluptas!
              </p>
            </div>
            <div className={s.companyInfo__requirements}>
              <h2 className={s.companyInfo__requirements__title}>Requirements</h2>
              <p className={s.companyInfo__requirements__value}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deserunt ipsa nisi obcaecati!
                Autem, deserunt illum magnam modi suscipit velit? Amet aperiam architecto asperiores atque aut
                consectetur corporis distinctio eum facere id ipsa ipsam ipsum iusto maxime molestiae natus omnis
                placeat possimus repellat sint, suscipit tempore tenetur ullam vero voluptate?
              </p>
            </div>
            <ul className={s.companyInfo__requirements__list}>
              <li className={s.companyInfo__requirements__item}>
                Morbi interdum mollis sapien. Sed
              </li>
              <li className={s.companyInfo__requirements__item}>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus
              </li>
              <li className={s.companyInfo__requirements__item}>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
              </li>
              <li className={s.companyInfo__requirements__item}>
                Morbi interdum mollis sapien. Sed
              </li>
            </ul>
            <div className={s.companyInfo__task}>
              <h2 className={s.companyInfo__task__title}>
                What You Will Do
              </h2>
              <p className={s.companyInfo__task__value}>
                Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis,
                mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                dapibus sed, urna.
              </p>
            </div>
            <ol className={s.companyInfo__task__list}>
              <li className={s.companyInfo__task__item}>
                Morbi interdum mollis sapien. Sed
              </li>
              <li className={s.companyInfo__task__item}>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus
              </li>
              <li className={s.companyInfo__task__item}>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
              </li>
              <li className={s.companyInfo__task__item}>
                Morbi interdum mollis sapien. Sed
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className={s.footer}>
        <div className={s.container}>
          <div className={s.footer__content}>
            <div className={s.footer__info}>
              <h2 className={s.footer__title}>
                Senior Software Engineer
              </h2>
              <h3 className={s.footer__subtitle}>
                So Digital Inc.
              </h3>
            </div>
            <div className={s.footer__nav}>
              <button className={s.footer__nav__button}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyPage;
