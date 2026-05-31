export function sitePath(path = "/") {
  const cleanPath = path === "/" ? "" : path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
