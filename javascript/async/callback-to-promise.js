class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

/**
 * 1. id, pass
 * 2. login
 * 3. roles
 * 4. 사용자 정보 출력
 */

const userStorage = new UserStorage();

const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id))
  .then((user) => alert(`${user.name}님은 ${user.role}입니다.`))
  .catch(console.log);
