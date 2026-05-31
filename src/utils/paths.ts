function basePath() {
  const rawBase = import.meta.env.BASE_URL || "/";
  return rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
}

export function sitePath(path = "/") {
  const base = basePath();
  const cleanPath = path === "/" ? "" : path.replace(/^\//, "");
  return `${base}${cleanPath}`;
}

export function routePath(pathname: string) {
  const base = basePath();

  if (base === "/") {
    return pathname;
  }

  const baseWithoutSlash = base.slice(0, -1);
  if (pathname === baseWithoutSlash) {
    return "/";
  }

  if (pathname.startsWith(base)) {
    const cleanPath = pathname.slice(baseWithoutSlash.length);
    return cleanPath || "/";
  }

  return pathname;
}
