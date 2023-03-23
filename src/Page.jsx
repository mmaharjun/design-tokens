import React from 'react';
import { Button, theme } from 'antd';
import classes from './page.module.scss';


const { useToken } = theme;

export const Page = () => {
  const token = useToken();
  return (
    <Button className={classes.button} type='primary'>Testing Color</Button>
  )
}