export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "ellenf"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Ellen"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largestMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestMatch) {
    const x: number = parseInt(largestMatch[1]);
    const y: number = parseInt(largestMatch[2]);
    const z: number = parseInt(largestMatch[3]);
    return ((Math.max(x, y, z))).toString();
  }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }

  const minusMatch = query.match(/What is (\d+) minus by (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }
  
  return "";
}
