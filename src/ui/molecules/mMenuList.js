import { ABtn } from "../atoms/aBtn";

export function MMenuProject({ data, setStateMenu, stateMenu }) {
  return (
    <ul className="m-auto mt-10 flex w-fit items-center justify-center gap-5 rounded-full bg-[#1A2534] px-5 py-3 shadow-sm shadow-slate-500 sm:px-5 sm:py-4">
      {data.map((link) =>
        link.status === stateMenu ? (
          <li key={link.id}>
            <ABtn data={link} color="#fff" />
          </li>
        ) : (
          <li key={link.id}>
            <ABtn
              data={link}
              color="#b3b3b3"
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
