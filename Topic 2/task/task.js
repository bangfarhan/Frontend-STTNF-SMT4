/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
var users = [
{
  name : 'Farhan Lubis',
  age : 20,
  major : 'Informatika'
},
{
  name : 'Ega Sukandi',
  age : 21,
  major : 'Sistem Informasi'
},
{
  name : 'Alfaridzi',
  age : 20,
  major : 'Sastra Indonesia'
},
{
  name : 'Rival Malik',
  age : 20,
  major : 'Informatika'
},
{
  name : 'Hamid Kurniawan',
  age : 22,
  major : 'Akuntansi'
},];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  console.log('\n # Get All Resource');
  for (var i = 0; i <= users.length -1 ; i++) {
    for (const key in users[i]) {
      console.log(`${key}: ${users[i][key]}`);
    }
  console.log('___________________________');
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {

  console.log("\n # Add New Resource: "+ user.name);
  users.push(user);
  for(let i = 0; i <= users.length - 1; i++)
  {
    for (const key in users[i])
    {
      (i == users.length - 1) && console.log(`${key}: ${users[i][key]}`);
    }
  }
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
  console.log("\n # Edit Resource: " + users[index].name);
  users[index] = user; //input to array
  console.log("Data updated successfully!");
  for (const key in users[index]) 
  {
    console.log(`${key}: ${users[index][key]}`);
  }
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */

const destroy = (index) => {
  console.log("\n # Delete Resource: " + users[index].name);
  users.splice(index, 1);//script delete data array by index
  console.log("Data deleted successfully!");

}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  all();

  /**
   * Test function store
   */
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);
  all();

  /**
   * Test function update
   */
  const editedIndex = 0;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);
  all();

  /**
   * Test function destroy
   */
  const deletedIndex = 1;
  destroy(deletedIndex);
  all();
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };