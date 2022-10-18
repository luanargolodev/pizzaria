import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export function Input({...rest}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type="text" className={styles.input} {...rest} />
  )
}

export function TextArea({...rest}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={styles.input} {...rest}></textarea>
  )
}