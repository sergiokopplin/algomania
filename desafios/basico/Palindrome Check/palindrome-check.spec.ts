// A solucao deve estar implementada dentro da função abaixo.
// Dica: Você pode criar outras funções e classes se quiser mas esta é a função principal que será usada.

function solution(str: string): Boolean {
  if (str.length === 1 || str.length === 0) return false;

  const normalized = str.toLowerCase().replace(/\s/g, "");
  return normalized.split("").reverse().join("") === normalized;
}

describe("Palindrome Check", () => {
  it("should return false", () => {
    expect(solution("")).toBe(false);
    expect(solution("ti")).toBe(false);
    expect(solution(" ")).toBe(false);
    expect(solution("t")).toBe(false);
    expect(solution("notPalindrome")).toBe(false);
  });

  it("should return true", () => {
    expect(solution("iti")).toBe(true);
    expect(solution("reviver")).toBe(true);
    expect(solution("A base do teto desaba")).toBe(true);
  });
});
