import { createStore, createLocalPersister } from "tinybase";

const store = createStore();

const persister = createLocalPersister(store, "tobyPlaysTheUke");

export { store }