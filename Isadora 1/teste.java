import Seres.Aluno;

public class teste {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno();

        aluno1.nome = "Isadora";
        aluno1.idade = 16; 
        aluno1.matricula = "Isa Linda demais";

        System.out.println("nome: " + aluno1.nome);
        System.out.println("idade: " + aluno1.idade);
        System.out.println("matricula: " + aluno1.matricula);

    }
}