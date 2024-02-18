import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import PayoutTable from "./components/PayoutTable";
import { createTheme } from "@razorpay/blade/tokens";
import { BladeProvider } from "@razorpay/blade/components";

const customThemeTokens = createTheme({
  brandColor: "#1e2442", // 'rgba(131, 0, 61)', 'hsl(332, 100%, 26%)' are also valid values
  colors: {
    surface: {
      background: {
        gray: {
          subtle: "#1d2345",
          moderate: "#1d2345",
          intense: "#1d2345",
        }
      }
    }
  }
});

function App() {
  return (
    <BladeProvider themeTokens={customThemeTokens} colorScheme="dark">
      <Layout>
        <PayoutTable />
      </Layout>
    </BladeProvider>
  );
}

export default App;
