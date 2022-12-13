export class Storage {
  public static async setItem(key: string, value: any) {
    return Promise.resolve().then(async () => {
      localStorage.setItem(key, value);
      return Promise.resolve(true)
    });
  }

  public static async getItem(key: string) {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key);
    });
  }

  
  public static isKeyExistInStorage (key: string) {
    return !!localStorage.getItem(key);
  }
}
