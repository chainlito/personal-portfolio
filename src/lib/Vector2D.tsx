export class Vector2D {
	public constructor(public x: number = 0, public y: number = 0) {}

	public set(x: number, y: number): Vector2D {
		this.x = x;
		this.y = y;
		return this;
	}

	public clone(): Vector2D {
		return new Vector2D(this.x, this.y);
	}

	public add(xAdd = 0, yAdd = 0, clone = false): Vector2D {
		return (clone ? this.clone() : this).set(this.x + xAdd, this.y + yAdd);
	}

	public scale(xScale = 1, yScale = 1, clone = false): Vector2D {
		return (clone ? this.clone() : this).set(this.x * xScale, this.y * yScale);
	}

	public distance(otherVector: Vector2D): number {
		return Math.sqrt((this.x - otherVector.x) ** 2 + (this.y - otherVector.y) ** 2);
	}

	public toString(): string {
		return `{ x: ${this.x.toFixed(2)}, y: ${this.y.toFixed(2)} }`;
	}
}
