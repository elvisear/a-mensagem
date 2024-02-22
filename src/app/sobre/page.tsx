import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Saiba mais sobre o projeto Bíblia A Mensagem online. Descubra a história e a missão por trás da nossa dedicação em tornar a palavra de Deus acessível a todos.",
};

export default function Sobre() {
  return (
    <div className="sobre">
      <h1 className="text-center text-xl font-semibold tracking-tight dark:text-white sm:text-2xl">
        Sobre
      </h1>
      <br />
      <p className="text-center sobre-destaque">
          A Mensagem é uma tradução contemporânea <br /> da Bíblia com base nas
          línguas originais <br /> que procura preservar na linguagem do <br />
          dia a dia seus eventos e ideias.
      </p>
      <p>
        Se há algum diferencial em A Mensagem, talvez seja porque seu texto foi
        moldado pelas mãos de um pastor atuante. Durante a maior parte da minha
        vida adulta, eu tinha a responsabilidade principal de apresentar a
        mensagem da Bíblia a homens e mulheres com os quais trabalhei. Eu o fiz
        a partir de pregações e estudos bíblicos, em reuniões de estudo bíblico
        nas casas e em acampamentos nas montanhas, por intermédio de conversas
        em hospitais e em clínicas, tomando café na casa das pessoas e ao
        caminhar pela praia. A Mensagem cresceu no solo de quarenta anos de
        trabalho pastoral.
      </p>
      <p>
        Enquanto eu trabalhava nessa tarefa, essa Palavra de Deus, que forma e
        transforma vidas, realmente formou e transformou vidas. Plantada no solo
        da minha igreja e comunidade, as palavras-sementes da Bíblia germinaram,
        cresceram e amadureceram. Quando chegou o momento de realizar a obra que
        é agora A Mensagem, eu geralmente sentia que caminhava por um pomar no
        tempo da colheita e colhia maçãs, pêssegos e ameixas maduras dos ramos
        carregados. Dificilmente haverá uma página na Bíblia que eu não tenha
        visto acontecer de um modo ou de outro na vida de homens e mulheres,
        santos e pecadores, de quem fui pastor - e, depois, tenha verificado em
        minha nação e cultura.
      </p>
      <p>
        Eu não comecei como pastor. Iniciei minha vida vocacional como professor
        e, por vários anos, ensinei as línguas bíblicas, hebraico e grego, em um
        seminário teológico. Eu esperava passar o resto da vida como professor e
        acadêmico, ensinando, escrevendo e pesquisando. Mas, então, minha vida
        sofreu uma súbita mudança vocacional, para pastorear uma igreja.
      </p>
      <p>
        Eu estava agora mergulhado em um mundo totalmente diferente. A primeira
        diferença perceptível era que ninguém parecia se importar muito com a
        Bíblia que até recentemente eu era pago para ensinar. Muitas das pessoas
        com quem eu trabalhava agora não sabiam praticamente nada a respeito da
        Bíblia, nunca a tinham lido e não estavam interessadas em aprender.
        Muitos outros passaram anos lendo-a, mas, para eles, a Bíblia se perdeu
        em meio à familiaridade e foi reduzida a clichês. Entediados, eles a
        abandonaram. E não havia muitas pessoas entre esses dois extremos.
        Poucos estavam interessados no que eu considerava ser minha tarefa
        principal: apresentar as palavras da Bíblia à mente e ao coração das
        pessoas, tornando a mensagem viva. Eles achavam jornais e revistas,
        vídeos e filmes mais palatáveis.
      </p>
      <p>
        Enquanto isso, eu assumi, como o trabalho da minha vida, a
        responsabilidade de fazer essas pessoas ouvirem, ouvirem de fato, a
        mensagem deste livro. Eu sabia que essa tarefa era difícil para mim.
      </p>
      <p>
        Mesmo vivendo em mundos de duas línguas diferentes, o mundo da Bíblia e
        o mundo moderno, sempre entendi que se trata do mesmo mundo. Mas essas
        pessoas não enxergavam a situação assim. Por isso, foi necessário que eu
        me tornasse um &ldquo;tradutor&rdquo; (ainda que eu não fosse chamado assim naquela
        época), permanecendo diariamente na fronteira entre dois mundos,
        tornando a linguagem da Bíblia que Deus usa para nos criar e salvar,
        curar e abençoar, julgar e governar na linguagem moderna que usamos para
        comentar sobre a vida e contar histórias, dar instruções, fazer negócios
        e cantar músicas para os nossos filhos.
      </p>
      <p>
        E, em todo o tempo, aquelas velhas línguas bíblicas, os poderosos e
        vívidos originais hebraicos e gregos, continuavam a trabalhar
        subliminarmente em minha fala, dando energia e agudeza às palavras e
        frases, expandindo a imaginação das pessoas com as quais eu trabalhava
        para ouvir a linguagem da Bíblia na linguagem moderna e a linguagem
        moderna na linguagem da Bíblia.
      </p>
      <p>
        Eu o fiz durante trinta anos em uma congregação. E, então, num dia (30
        de abril de 1990), recebi uma carta de um editor pedindo-me para
        trabalhar em uma nova versão da Bíblia dentro dos limites do que eu
        vinha fazendo como pastor. Eu concordei. Os dez anos seguintes foram um
        tempo de colheita. A Mensagem é o resultado.
      </p>
      <p>
        A Mensagem é uma Bíblia de leitura. Não tem a intenção de substituir as
        excelentes Bíblias de estudo que estão disponíveis. Meu propósito aqui
        (tal como foi antes em minha igreja e comunidade) é simplesmente fazer
        que as pessoas a leiam, pessoas que não sabem que a Bíblia é um livro
        para ser lido, pelo menos por elas, e fazer que pessoas que perderam, há
        muito, o interesse pela Bíblia a leiam novamente. Mas eu não tentei
        fazer disso uma tarefa fácil há muita coisa na Bíblia difícil de
        entender. Por isso, em algum momento durante o caminho, cedo ou tarde,
        vai ser importante tomar uma Bíblia padrão de estudos, para facilitar
        estudos posteriores. Enquanto isso, leia para viver; ore enquanto lê:
        &ldquo;Deus, que seja comigo assim como dizes&rdquo;.
      </p>
      <img
        src="/images/assinatura.png"
        alt="Assinatura Eugene Hoiland Peterson"
        className="w-1/2 mx-auto"
      />
    </div>
  );
}