import { TopNav } from './TopNav';
import { MainHeader } from './MainHeader';
import { QuickLinks } from './QuickLinks';

export function Header() {
  return (
    <header>
      <TopNav />
      <div className=" py-3 border-b">
        <div className="max-w-full px-32 mx-auto">
          <MainHeader />
          <QuickLinks />
        </div>
      </div>
    </header>
  );
}