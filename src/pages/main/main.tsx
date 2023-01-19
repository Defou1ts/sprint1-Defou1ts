import { Htag, Text } from '../../components';

export const MainPage = () => (
  <section className='main-page'>
    <Htag tag='h1'>The quick brown fox jumps over the lazy dog.</Htag>
    <Htag tag='h2'>The quick brown fox jumps over the lazy dog.</Htag>
    <Htag tag='h3'>The quick brown fox jumps over the lazy dog.</Htag>
    <Htag tag='h4'>The quick brown fox jumps over the lazy dog.</Htag>
    <Htag tag='h5'>The quick brown fox jumps over the lazy dog.</Htag>
    <Text type='subtitle' size='l'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='subtitle' size='s'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='body' size='l'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='body' size='s'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='info' size='l'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='info' size='s'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='button' size='l'>
      The quick brown fox jumps over the lazy dog.
    </Text>
    <Text type='button' size='s'>
      The quick brown fox jumps over the lazy dog.
    </Text>
  </section>
);
