import { StaticImageData } from "next/image";

type TSection = {
  p: string;
  h2: string;
  content?: string;
};
type TWork = {
  project: string;
  projectCost: string;
  client: string;
  contractor: string;
  consultant: string;
  position: string;
};
type FooterSection = {
  title: string;
  content?: string;
  copyright: string;
};

export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: StaticImageData;
};

export type TGraduation = {
  universityLogo: StaticImageData;
  year: string;
  name: string;
  dept: string;
  gpa: string;
  resume: string;
};

export type TRealWorldExperience = {
  role: string;
  company: string;
  location?: string;
  type: string;
  responsibilities: string[];
};
export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};

export type THero = {
  name: string;
  skills: string[];
  description: string;
  profileImage: {
    src: StaticImageData;
    alt: string;
  };
  backgroundImage: {
    src: StaticImageData;
    alt: string;
  };
};

export type TSkills = {
  title: string;
  skills: {
    skill: string;
    percentage: number;
  }[];
};

export type TWorkExperience = {
  title: string;
  works: TWork[];
};
export type TRoles = {
  role: string;
  description: string;
  icon: string;
};

export type TBlog = {
  id: string;
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  date: string;
  link: string;
};

export type TMainProjects = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: {
    src: StaticImageData;
    alt: string;
  };
  github_repo?: string;
  remote_url?: string;
};

export type TCertification = {
  certificate: string;
};

export type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: Required<TSection>;
    feedbacks: TSection;
    works: Required<TSection>;
    tech: Required<TSection>;
    footer: FooterSection;
  };
};

export type TSections = {
  about: TSection;
  skills: TSection;
  experience: TSection;
  projects: TSection;
  certifications: TSection;
  additional_works: TSection;
};
