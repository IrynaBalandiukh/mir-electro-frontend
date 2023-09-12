import products from '../../api/progucts.json';
import { ProductCard } from '../ProductCard/ProductCard';
import { Collection } from '../Collection/Collection';

//@ts-ignore
import hits from '../../images/hits.png';
//@ts-ignore
import complects from '../../images/complects.png';

import './Catalog.scss';

export const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__header">
        <h4 className="catalog__title">Каталог товаров</h4>

        <p className="catalog__description">
        Выбирай своего незаменимого помощника для приготовления любого блюда
        </p>

        <div className="catalog__toolbar">
          <div className="catalog__filter-selector">
            <label className="catalog__filter-label" htmlFor="filter">Фильтры:</label>

            <select id="filter" className="catalog__filter" name="filter">
              <option value="all">Все</option>
              <option value="all">Блендеры</option>
              <option value="all">Чайники</option>
              <option value="all">Тостеры</option>
              <option value="all">Кофемашини</option>
            </select>
          </div>

          <div className="catalog__filter-selector">
            <label className="catalog__filter-label" htmlFor="filter">Сортировать:</label>

            <select id="filter" className="catalog__filter" name="filter">
              <option value="all">Самые популярные</option>
              <option value="all">Цена от низкой</option>
              <option value="all">Цена от высокой</option>
            </select>
          </div>
        </div>

      </div>

      <div className="catalog__content">
        <div className="catalog__collection">
          <Collection 
            name="Хиты этого года"
            description="Всё для кухни"
            image={hits}
          />
        </div>

        {products.map(product => <ProductCard key={product.id} product={product} />)}
        
        <div className="catalog__collection">
          <Collection 
            name="Комлекты"
            description="Наборы техники"
            image={complects}
          />
        </div>

      </div>

      <div className="catalog__more">
        <a href="/#" className="catalog__link">Показать больше</a>
      </div>
    </div>
  );
}
