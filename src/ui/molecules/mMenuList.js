import { ABtn } from "../atoms/aBtn";

export function MMenuProjects({ data, setStateMenu, stateMenu }) {
  return (
    <ul className="m-auto mt-10 flex w-fit items-center justify-center gap-5 rounded-full bg-[#262626] px-5 py-4 shadow-sm shadow-slate-500">
      {data.map((link) =>
        link.status === stateMenu ? (
          <li key={link.id}>
            <ABtn data={link} color="#e0e0e0" />
          </li>
        ) : (
          <li key={link.id}>
            <ABtn
              data={link}
              color="#777"
              onClick={() => setStateMenu(link.status)}
            />
          </li>
        ),
      )}
    </ul>
  );
}

export function MMenuSkill({ data, setStateMenu, stateMenu }) {
  return (
    <nav className="w-100% mt-10 border-b-2 border-[#181818]">
      <ul className="flex items-center gap-5">
        {data.map((link) =>
          link.status === stateMenu ? (
            <li
              key={link.id}
              className="transition-border border-b duration-300"
            >
              <ABtn data={link} color="#e0e0e0" />
            </li>
          ) : (
            <li key={link.id}>
              <ABtn
                data={link}
                color="#777"
                onClick={() => setStateMenu(link.status)}
              />
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
