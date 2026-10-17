export interface Utilizator {
  id: number;
  nume: string;
  email: string;
  parola_hash: string;
  rol: "utilizator" | "administrator";
  data_inregistrare: string;
}

export interface CategorieObiect {
  id: number;
  nume: string;
  descriere: string | null;
}

export interface Anunt {
  id: number;
  titlu: string;
  descriere: string;
  imagine_url: string | null;
  stare_obiect: "nou" | "bun" | "necesita_reparatii";
  statut: "disponibil" | "rezervat" | "oferit";
  data_publicare: string;
  id_utilizator: number;
  id_categorie: number;
}

export interface PunctColectare {
  id: number;
  nume: string;
  adresa: string;
  latitudine: number;
  longitudine: number;
  program: string | null;
  telefon: string | null;
}

export interface TipDeseu {
  id: number;
  nume: string;
  descriere: string | null;
}

export interface PunctTipDeseu {
  id_punct: number;
  id_tip_deseu: number;
}

export interface Recomandare {
  id: number;
  titlu: string;
  continut: string;
  data_publicare: string;
  id_tip_deseu: number;
  id_autor: number;
}