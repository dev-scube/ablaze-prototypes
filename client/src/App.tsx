import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Prototype1 from "./pages/Prototype1";
import Prototype2 from "./pages/Prototype2";
import Prototype3 from "./pages/Prototype3";
import Prototype4 from "./pages/Prototype4";

function Router() {
  return (
    <Switch>
      <Route path={"/ablaze-prototypes"} component={Home} />
      <Route path={"/ablaze-prototypes/prototype1"} component={Prototype1} />
      <Route path={"/ablaze-prototypes/prototype2"} component={Prototype2} />
      <Route path={"/ablaze-prototypes/prototype3"} component={Prototype3} />
      <Route path={"/ablaze-prototypes/prototype4"} component={Prototype4} />
      <Route path={"/ablaze-prototypes/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
