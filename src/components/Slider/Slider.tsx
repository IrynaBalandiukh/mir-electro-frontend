import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.scss';
import { Link } from '../Link/Link';

//@ts-ignore
import blender1 from '../../images/blender-1.png';
//@ts-ignore
import blender2 from '../../images/blender-2.png';
//@ts-ignore
import blender3 from '../../images/blender-3.png';

export const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        pagination={{
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            return `${(current).toString().padStart(2, '0')}/${(total).toString().padStart(2, '0')}`;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="slider__container"
      >
        <SwiperSlide>
          <article className="slider__item">
            <div className="slider__wrapper">
              <div className="slider__content">
                <h3 className="slider__item-title">Погружной блендер нового поколения</h3>

                <div className="slider__item-description">
                  <p className="slider__item-subtitle">Удобство. Комфорт. Качество. Гарантия.</p>

                  <p className="slider__item-text">Отличный и не заменимый помощник на любой кухне для приготовления и воплощения любых кулинарных идей</p>

                  <div className="slider__item-link">
                    <Link>Узнать больше</Link>
                  </div>
                </div>
              </div>

              <div className="slider__item-model-wrapper">
                <p className="slider__item-model">Sencor SHB 4460WH</p>
              </div>
            </div>

            <div className="slider__item-images">
              <img className="slider__item-image-1" src={blender1} alt="blender" />
              <img className="slider__item-image-2" src={blender2} alt="blender" />
              <img className="slider__item-image-3" src={blender3} alt="blender" />
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="slider__item">
            <div className="slider__wrapper">
              <div className="slider__content">
                <h3 className="slider__item-title">Погружной блендер нового поколения</h3>

                <div className="slider__item-description">
                  <p className="slider__item-subtitle">Удобство. Комфорт. Качество. Гарантия.</p>

                  <p className="slider__item-text">Отличный и не заменимый помощник на любой кухне для приготовления и воплощения любых кулинарных идей</p>

                  <div className="slider__item-link">
                    <Link>Узнать больше</Link>
                  </div>
                </div>
              </div>

              <div className="slider__item-model-wrapper">
                <p className="slider__item-model">Sencor SHB 4460WH</p>
              </div>
            </div>

            <div className="slider__item-images">
              <img className="slider__item-image-1" src={blender1} alt="blender" />
              <img className="slider__item-image-2" src={blender2} alt="blender" />
              <img className="slider__item-image-3" src={blender3} alt="blender" />
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="slider__item">
            <div className="slider__wrapper">
              <div className="slider__content">
                <h3 className="slider__item-title">Погружной блендер нового поколения</h3>

                <div className="slider__item-description">
                  <p className="slider__item-subtitle">Удобство. Комфорт. Качество. Гарантия.</p>

                  <p className="slider__item-text">Отличный и не заменимый помощник на любой кухне для приготовления и воплощения любых кулинарных идей</p>

                  <div className="slider__item-link">
                    <Link>Узнать больше</Link>
                  </div>
                </div>
              </div>

              <div className="slider__item-model-wrapper">
                <p className="slider__item-model">Sencor SHB 4460WH</p>
              </div>
            </div>

            <div className="slider__item-images">
              <img className="slider__item-image-1" src={blender1} alt="blender" />
              <img className="slider__item-image-2" src={blender2} alt="blender" />
              <img className="slider__item-image-3" src={blender3} alt="blender" />
            </div>
          </article>
        </SwiperSlide>

        <div className="background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>
      </Swiper>
    </div>
  );
}