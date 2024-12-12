import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Services } from './components/Services';
import { Promotions } from './components/Promotions';
import { Recommendations } from './components/Recommendations';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main className="space-y-4 py-8">
        <Categories />
        <Services />
        <Promotions />
        <Recommendations />
      </main>
    </div>
  );
}

export default App;