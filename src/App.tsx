import './App.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SocialButtonDemo from './components/button-11'
import SocialLoginButtonDemo from './components/button-12'
import SplitButton from './components/button-07'
import ToggleButton from './components/button-15'
import ThemeToggleButton from './components/button-16'
import GroupButtonDemo from './components/button-18'
import GroupButton2Demo from './components/button-19'
import CopyButton from './components/button-20'
import ButtonsWithBadge from './components/button-21'
import ButtonsWithTooltip from './components/button-22'
import ButtonsWithTapAnimation from './components/button-23'
import IconButtonDemo from './components/button-05'
import LoadingButtonDemo from './components/button-06'
import GradientButtonDemo from './components/button-09'
import LinkButtonDemo from './components/button-10'
import NeonButtonDemo from './components/button-13'
import RoundedButtonDemo from './components/button-14'
import FullWidthButtonDemo from './components/button-17'

function App() {
  return (
    <div className="app">
      <div>
        <ThemeToggleButton />
      </div>
      <div className='app-grid'>
        <div className="app-grid__item--separator w-full">
          <div className="grid-item__title text-5xl py-8">Buttons</div>
        </div>

        <div className='app-grid__item'>
          <div className='grid-item__title'>Primary</div>
          <Button>Primary</Button>
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Secondary</div>
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="app-grid__item">
          <div className='grid-item__title'>Destructive</div>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Outline</div>
          <Button variant="outline">Outline</Button>
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Icon</div>
          <IconButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Loading</div>
          <LoadingButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Split Button</div>
          <SplitButton />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Ghost</div>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Gradient</div>
          <GradientButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Link</div>
          <LinkButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Social</div>
          <SocialButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Social Login</div>
          <SocialLoginButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Neon</div>
          <NeonButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Rounded</div>
          <RoundedButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Toggle</div>
          <ToggleButton />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Theme Toggle</div>
          <ThemeToggleButton />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Full Width</div>
          <FullWidthButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Group</div>
          <GroupButtonDemo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Group 2</div>
          <GroupButton2Demo />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>Copy Button</div>
          <CopyButton />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>With badge</div>
          <ButtonsWithBadge />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>With tooltip</div>
          <ButtonsWithTooltip />
        </div>
        <div className='app-grid__item'>
          <div className='grid-item__title'>With tap animation</div>
          <ButtonsWithTapAnimation />
        </div>

        <div className="app-grid__item--separator w-full">
          <div className="grid-item__title text-5xl py-8">Cards</div>
        </div>

        <div className="app-grid__item">
          <div className="grid-item__title">Card</div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
