export default function save(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
}
