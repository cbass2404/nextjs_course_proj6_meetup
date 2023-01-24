import { useRef, useEffect } from "react";

import type { MutableRefObject } from "react";

export function useInterval(
  callback: () => unknown,
  delay: unknown
): MutableRefObject<number | undefined> {
  const intervalRef = useRef<number | undefined>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): unknown => savedCallback.current();

    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  return intervalRef;
}
