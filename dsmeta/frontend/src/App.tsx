import Header from "./components/Header"
import NotificationButton from "./components/NotificationButton"
import SaleCard from "./components/SalesCard"

function App() {
  return (
    <>
    <Header/>
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SaleCard />
        </div>
      </section>
    </main>
    </>
  )
 
}

export default App
