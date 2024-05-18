export class Cliente {
  private _name: string;
  private _edad: number;

  constructor(name: string, edad: number) {
    this._name = name
    this._edad = edad
  }

	public get name(): string {
		return this._name;
	}

	public get edad(): number {
		return this._edad;
	}

	public set name(value: string) {
		this._name = value;
	}

	public set edad(value: number) {
		this._edad = value;
	}
}
