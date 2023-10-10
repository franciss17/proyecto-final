import { useUserContext } from "../context/UserContext";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

export default function Products() {
    const { pizzas, error } = useUserContext();
    if (error) {
        return (
            <div className="container p-5 mt-5">
                <div>
                    <h3 className="text-center">{error}</h3>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="container p-5 mt-5">
                <div className="row">
                    {pizzas.map((item) => (
                        <CardPizza pizza={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
}
