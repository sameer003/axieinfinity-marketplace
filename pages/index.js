import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Header from "../components/header";
import Footer from "../components/footer";
import Filters from "../components/filters";
import Dashboard from "../components/dashboard";
import FilterContext from '../services/context';
import useFilters from '../services/useFilters';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-gateway.axieinfinity.com/graphql",
  }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});


export default function Home() {
  const [filters, dispatch] = useFilters();

  return (
    <ApolloProvider client={client}>
      <FilterContext.Provider value={{ filters, dispatch }}>
          <div className="flex flex-col h-screen select-none">
            <Header />
            <Filters />
            <Dashboard />
            <Footer />
          </div>
      </FilterContext.Provider>
    </ApolloProvider>
  );
}
