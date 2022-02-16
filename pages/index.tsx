import { Button, HTag, PTag, Tag } from '../components';

export default function Home() {
  return (
    <div>
      <HTag tag='h1'>Text</HTag>
      <HTag tag='h2'>Text</HTag>
      <HTag tag='h3'>Text</HTag>
      <Button appearance='primary' arrow='right'>
        Learn more
      </Button>
      <Button appearance='ghost' arrow='right'>
        Read reviews
      </Button>
      <PTag size='s'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos quidem numquam sapiente delectus. Fuga
        architecto eum explicabo harum necessitatibus delectus obcaecati sint corrupti reiciendis! Itaque voluptate
        nihil nisi. Asperiores!
      </PTag>
      <PTag>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos quidem numquam sapiente delectus. Fuga
        architecto eum explicabo harum necessitatibus delectus obcaecati sint corrupti reiciendis! Itaque voluptate
        nihil nisi. Asperiores!
      </PTag>
      <PTag size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos quidem numquam sapiente delectus. Fuga
        architecto eum explicabo harum necessitatibus delectus obcaecati sint corrupti reiciendis! Itaque voluptate
        nihil nisi. Asperiores!
      </PTag>
      <Tag color='red' size='m'>
        10
      </Tag>
      <Tag>Гарантия трудоустройства</Tag>
      <Tag color='grey' size='m'>
        bla
      </Tag>
      <Tag color='green'>-10 000 ₽ </Tag>
      <Tag color='primary'>-10 000 ₽ </Tag>
      <Tag size='s' href='hello'>
        10
      </Tag>
    </div>
  );
}
