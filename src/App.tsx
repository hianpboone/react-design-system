import './styles/global.css';
import { Logo } from './Logo'
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { At, Key } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className='w-sreen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo/>

        <Heading size="lg" className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size ="lg" className='text-gray-400 mt-1'>
          Log in and start using it!
        </Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>

        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Email Adress
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <At/>
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Type your email address'/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Password
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Key/>
            </TextInput.Icon>
            <TextInput.Input type="password" id='password' placeholder='******'/>
          </TextInput.Root>

        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id="remember"/>
          <Text size="sm" className='text-gray-100'>
            Remember me
          </Text>
        </label>

        <Button type="submit" className='mt-4'>
          Log in
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-100'>Forgot your password?</a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-100'>Don’t have an account? Sign up</a>
        </Text>
      </footer>
    </div>
  )
}
