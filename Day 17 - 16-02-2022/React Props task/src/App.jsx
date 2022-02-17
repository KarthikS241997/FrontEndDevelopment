import './App.css';
import Card from './dashboard/Card';

const App = () => {
return( <>
<div className="appmain">
<Card title="Today's Money" num="$53000" cent="+55%" logo='fas fa-dollar-sign'></Card>
<Card title="Today's User" num="2300" cent="+3%" logo="fas fa-globe-asia"></Card>
<Card title="New Clients" num="+3462" cent="-2%" logo="fas fa-trophy"></Card>
<Card title="Sales" num="103430" cent="+5%" logo="fas fa-shopping-cart"></Card>
</div>


</>
);

}

export default App