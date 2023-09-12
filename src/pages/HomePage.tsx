import { useState } from 'react';

import { MainLayout } from '../layouts/MainLayout';
import { Catalog } from '../components/Catalog/Catalog';
import { Subscription } from '../components/Subscription/Subscription';
import { Contacts } from '../components/Contacts/Contacts';
import { Modal } from '../components/Modal/Modal';
import { Slider } from '../components/Slider/Slider';

export const HomePage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <MainLayout>
      <main>
        <Slider />

        <Catalog />

        <Subscription />

        <Contacts setIsModalActive={ setIsModalActive } setResponse={ setResponse } setError={ setError } />
      </main>

      <Modal isModalActive={isModalActive} setIsModalActive={ setIsModalActive } response={response} error={error} />
    </MainLayout>
  );
};
