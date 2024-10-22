"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    image: "/images/RNQFqP6PtYg (1)-fotor-bg-remover-20241021195057.png",
    tag: ["Общее"],
    content: (
      <p className="text-base lg:text-lg">
        «Умный гардероб» представляет собой стильное и функциональное
        пространство с интегрированными технологиями. Основные черты дизайна
        включают в себя:
        <ul className="list-disc pl-10">
          <li>
            <p className="font-bold">Минимализм и современность:</p> Чистые
            линии, отсутствие излишних деталей и современные материалы создают
            современный внешний вид гардероба;
          </li>
          <li>
            <p className="font-bold">Интеграция с мобильными устройствами:</p>{" "}
            Система легко управляется через мобильное приложение, позволяя
            пользователям без контакта с обслуживающим персоналом получать свои
            вещи;
          </li>
          <li>
            <p className="font-bold">Технологические решения:</p> Использование
            RFID-меток для вещей обеспечивает цифровой поиск и автоматическое
            распределение вещей по соответствующим секциям гардероба;
          </li>
          <li>
            <p className="font-bold">Пространственная эффективность:</p>{" "}
            Оптимальное использование пространства с за счет двухъярусной
            системы.
          </li>
        </ul>
      </p>
    ),
  },
  {
    id: 2,
    image: "/images/gxgeDwc6LwE.png",
    tag: ["Характеристики"],
    content: (
      <p className="text-base lg:text-lg">
        Автоматизированная система «Умный гардероб» имеет следующие
        технологические параметры:
        <ul className="list-disc pl-10">
          <li><span className="font-bold">Тип конвейера:</span> внутренний рельс;</li>
          <li>
          <span className="font-bold">Тип управления:</span> ручной, автоматический, полуавтоматический,
            интеллектуальный;
          </li>
          <li><span className="font-bold">Количество ячеек гардероба в модуле:</span> от 60 до 200;</li>
          <li>Площадь помещения: 5,8 м^2;</li>

          <li>
          <span className="font-bold">Система управления:</span> автоматическая, на основе программного обеспечения;
          </li>
          <li><span className="font-bold">Интерфейс управления:</span> смартфон, планшет, веб-интерфейс;</li>
          <li><span className="font-bold">Система сканирования:</span> RFID, штрих-коды,FACE ID;</li>
          <li><span className="font-bold">Подключение к сети:</span> беспроводное, WI-FI;</li>
          <li><span className="font-bold">Система энергопотребления:</span> энергосберегающая, с функцией отключения модулей при их неиспользовании;</li>
          <li><span className="font-bold">Технология хранения:</span> максимальное использование пространства, антикоррозийное покрытие ячеек гардероба;</li>
        </ul>
      </p>
    ),
  },
  {
    id: 3,
    image: "/images/xKxHT5DNsBw.png",
    tag: ["Особенности"],
    content: (
      <p className="text-base lg:text-lg">
        «Умный гардероб» имеет ряд конкурентных преимуществ:
        <ul className="list-disc pl-10">
          <li>
          <span className="font-bold">Экономия времени:</span> С помощью умного гардероба работники предприятия смогут быстро и легко найти нужную одежду для работы, 
          без необходимости тратить время на поиск и сортировку;
          </li>
          <li>
          <span className="font-bold">Удобство и комфорт:</span> Умный гардероб может оптимизировать температурный режим и влажность, что обеспечит комфортные условия 
          для работы персонала;
          </li>
          <li>
          <span className="font-bold">Безопасность:</span> Система умного гардероба позволяет отслеживать наличие работников в определенных зонах, что повышает 
          уровень безопасности на предприятии;
          </li>
          <li>
          <span className="font-bold">Экономия ресурсов:</span> Умный гардероб может оптимизировать использование одежды и обуви, что позволит снизить расходы 
          на ее покупку и обслуживание;
          </li>
          <li>
          <span className="font-bold">Улучшение имиджа компании:</span> Использование современных технологий в работе может создать благоприятное впечатление о 
          компании у клиентов, партнеров и работников;
          </li>
        </ul>
      </p>
    ),
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Общее");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const [img, setImg] = useState(
    "/images/RNQFqP6PtYg (1)-fotor-bg-remover-20241021195057.png"
  );

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Проект
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-3">
        <ProjectTag
          onClick={handleTagChange}
          name="Общее"
          isSelected={tag === "Общее"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Характеристики"
          isSelected={tag === "Характеристики"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Особенности"
          isSelected={tag === "Особенности"}
        />
      </div>
      <div ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              content={project.content}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
