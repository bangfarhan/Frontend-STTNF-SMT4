/**
 * TODO 7.
 * Import fungsi formatUser, findByName, fildetByMajor
 * dari file controllers/UserController.js
 */
// CODE HERE
import { formatUser, findByName, filterByMajor } from './controllers/UserController.js';

/**
 * Fungsi Main.
 * Jangan edit atau hapus fungsi main.
 * Fungsi main untuk testing aplikasi.
 */

(async () => {

  console.log("# Format User: Mr/Mrs"); //menulis di console

  const resultFormatUsers = await formatUser("Mr/Mrs");
  console.log(resultFormatUsers); //menulis di console

  console.log("\n# Find User by Name: Aufa");
  const resultFindByName = await findByName("Aufa");
  console.log(resultFindByName);//menulis pencaharian by nama

  console.log("\n# Filter User by Major: English");
  const resultFilterByMajor = await filterByMajor("English");
  console.log(resultFilterByMajor); //menulis di console data berdasarkan major
})();
