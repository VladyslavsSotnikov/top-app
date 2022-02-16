import { Button, HTag } from '../components';

export default function Home() {
  return (
    <div>
      <HTag tag='h1'>Text</HTag>
      <HTag tag='h2'>Text</HTag>
      <HTag tag='h3'>Text</HTag>
      <Button>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='right'>
        Читать отзывы
      </Button>
    </div>
  );
}
