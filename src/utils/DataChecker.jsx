const AppError = require("./AppError.jsx");

class DataChecker {
  stringChecker(string, message) {
    const isTheStringEmpty = !string;

    if (isTheStringEmpty) throw new AppError(message);
  }

  arrayChecker(array, message) {
    const isTheArrayEmpty = array.length < 1;

    if (isTheArrayEmpty) throw new AppError(message);
  }

  userExists(user) {
    const errorMessage =
      "Este usuário não está cadastrado!";

    this.stringChecker(user, errorMessage);
  }

  usersExists(usersInfos) {
    const errorMessage =
      "Não há usuários cadastrados!";

    this.arrayChecker(usersInfos, errorMessage);
  }

  noteExist(note) {
    const errorMessage =
      "Esta nota não está cadastrada!";

    this.stringChecker(note, errorMessage);
  }

  onlyNumbers(numbers) {
    const thereIsNotOnlyNumbers = numbers.find((number) => isNaN(number));

    if (thereIsNotOnlyNumbers) {
      throw new AppError(
        "Somente números são aceitos."
      );
    }
  }

  isANumber(rating) {
    if (isNaN(rating)) {
      throw new AppError(
        "Somente um número é aceito."
      );
    }
  }

  areThereTagsRegistered(tags) {
    const errorMessage = "Este usuário não possui tags cadastradas.";

    this.arrayChecker(tags, errorMessage);
  }

  tagExist(tag) {
    const errorMessage = "Esta tag não está cadastrada.";

    this.stringChecker(tag, errorMessage);
  }

  isTheTagEmpty(tag) {
    const errorMessage =
      "Não é possível atualizar a tag pois o nome está vazio.";

    this.stringChecker(tag, errorMessage);
  }

  hasAllDataBeenSent(data) {
    const errorMessage =
      "Dados estão faltando!";

    const missingData = data.every((info) => info != false);

    this.stringChecker(missingData, errorMessage);
  }

  emailAlreadyRegistered(email) {
    if (email)
      throw new AppError("Este email já está registrado!");
  }

  doesThisEmailBelongToThisUser(user, email) {
    if (user.id !== email.id) {
      throw new AppError(
        "Este email já está registrado por outro usuário!"
      );
    }
  }

  wasTheCurrentPasswordSent(currentPassword) {
    const errorMessage = `Para cadastrar uma nova senha, é necessário enviar a senha atual!`;

    this.stringChecker(currentPassword, errorMessage);
  }

  doThePasswordsMatch(math) {
    if (!math) {
      throw new AppError(
        "A senha atual está incorreta!"
      );
    }
  }

  isTheTitleOfTheNoteEmpty(title) {
    const errorMessage =
      "É obrigatório acrescentar um titulo para cadastrar a nota!";

    this.stringChecker(title, errorMessage);
  }

  noDataWasSent() {
    const errorMessage =
      "Para atualizar as informações, é necessário envia ao menos um dado.";

    this.stringChecker(undefined, errorMessage);
  }
}

module.exports = DataChecker;