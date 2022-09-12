import { initWelcomePage } from "./pages/welcome";
import { initStepOnePage } from "./pages/step-one/index";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/step-one/,
    component: initStepOnePage,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("El handleRoute recibio la ruta" + route);
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
}
