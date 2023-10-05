export function lossErlangb(N: number, A: number): number {
  if (A < 0) return 0;

  let B: number = 1;

  for (let k = 1; k <= N; k++) {
    B = (A * B) / k / (1 + (A * B) / k);
  }

  return B;
}

export function organsErlangb(A: number, p: number): number {
  let B: number = 1;
  let n: number = 1;

  while (1 == 1) {
    B = (A * B) / n / (1 + (A * B) / n);
    if (B <= p) break;

    n = n + 1;
  }

  return n;
}

export function trafficOfferted(N: number, B: number): number {
  if (N < 1) {
    return 0;
  }

  if (B < 0 || B > 1) {
    return 0;
  }

  if (B == 0) {
    return 0;
  }

  let a: number = 1.0;
  let testp: number = lossErlangb(N, a);

  while (testp < B) {
    a = a * 2;
    testp = lossErlangb(N, a);
  }

  let left: number = 0;
  let right: number = a;
  let mid: number = (left + right) / 2;
  let midp: number = lossErlangb(N, mid);

  while (right - left > 0.0001 * Math.max(1, left)) {
    if (midp < B) {
      left = mid;
      mid = (left + right) / 2;
      midp = lossErlangb(N, mid);
    } else {
      right = mid;
      mid = (left + right) / 2;
      midp = lossErlangb(N, mid);
    }
  }

  return left;
}
