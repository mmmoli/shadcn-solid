import { docsConfig } from "@/config/docs";
import { cn } from "@/libs/cn";
import { A, useLocation } from "@solidjs/router";
import { For, Match, Switch } from "solid-js";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div class="w-full">
      <For each={docsConfig.sidebarNav}>
        {item => (
          <div class="pb-4">
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
            <div class="grid grid-flow-row auto-rows-max text-sm">
              <For each={item.items}>
                {item => (
                  <Switch
                    fallback={
                      <span class="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline">
                        {item.title}
                      </span>
                    }
                  >
                    <Match when={item.href}>
                      <A
                        href={item.href!}
                        class={cn(
                          "flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                          item.disabled && "cursor-not-allowed opacity-60",
                          location.pathname === item.href
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.title}
                        {item.label ? (
                          <span
                            class={cn(
                              "ml-2 rounded-md bg-lime-600/10 px-1.5 py-0.5 text-xs leading-none text-lime-600 no-underline ring-1 ring-inset ring-lime-600/20 group-hover:no-underline dark:bg-lime-500/10 dark:text-lime-500 dark:ring-lime-500/20",
                              item.label === "Soon" && "bg-muted text-muted-foreground"
                            )}
                          >
                            {item.label}
                          </span>
                        ) : null}
                      </A>
                    </Match>
                  </Switch>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
