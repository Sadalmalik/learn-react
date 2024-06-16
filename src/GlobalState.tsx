import { Dispatch, SetStateAction } from "react";

const STORAGE_KEY = "site-state";

let globalState: { [key: string]: any } = {};

function InitGlobalState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    globalState = raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error(error);
    globalState = {};
  }
}

function SaveGlobalState() {
  const raw = JSON.stringify(globalState);
  console.log(`Global state:\n${raw}\n`);
  window.localStorage.setItem(STORAGE_KEY, raw);
}

function ClearGlobalState() {
  window.localStorage.removeItem(STORAGE_KEY);
  globalState = {};
}

function UseGlobalState<S>(
  key: string,
  initialValue: any = null,
  forceSave: boolean = true
): [S, Dispatch<SetStateAction<S>>] {
  let state = initialValue;
  if (key in globalState) {
    state = globalState[key];
  } else {
    globalState[key] = state;
  }

  return [
    state,
    (value: any) => {
      try {
        globalState[key] = state = value;
        if (forceSave) SaveGlobalState();
      } catch (error) {
        console.error(error);
      }
    },
  ];
}

export { InitGlobalState, UseGlobalState, SaveGlobalState, ClearGlobalState };
