import { useState, FormEvent } from 'react';
import Head from 'next/head';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';

import { setupAPIClient } from '../../services/api';
import { toast } from 'react-toastify';

export default function Category() {
  const [name, setName] = useState('');
  
  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if(name === '') {
      return;
    }

    const apiClient = setupAPIClient();
    
    const response = await apiClient.get('/category');
    const categories = response.data;
    const categoryExists = categories.find((category: any) => category.name === name);
    if(categoryExists) {
      toast.error('Categoria já cadastrada');
      return;
    } else {
      await apiClient.post('/category', {
        name: name
      });

      toast.success('Categoria cadastrada com sucesso');
      setName('')
    }
  }

  return (
    <>
      <Head>
        <title>Sujeito Pizza - Nova categoria</title>
      </Head>

      <div>
        <Header />
        
        <main className={styles.container}>
          <h1>Nova categoria</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  )
}