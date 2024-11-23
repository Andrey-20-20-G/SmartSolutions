import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container max-w-full p-12 grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="mt-4">
          <h4>SS</h4>
          <br />
          <p className="text-slate-400">
            SmartSolutions: разрабатываем и проектируем умный гардероб
          </p>
          <br />
          <p className="text-slate-400">
            Сделаем весь проект изделия целиком <br /> или поддержим на разных
            стадиях: <br />
            разработаем концепт изделия, поставим <br />
            изделие на серийное производство, поможем с техническим
            обслуживанием <br />и регистрацией изделия у регуляторов.
          </p>
        </div>
        <div className="mt-4">
          <h4>Офис</h4> <br />
          <p className="text-slate-400">
            {" "}
            194021, Г.САНКТ-ПЕТЕРБУРГ, МУНИЦИПАЛЬНЫЙ ОКРУГ СВЕТЛАНОВСКОЕ, УЛ
            ПОЛИТЕХНИЧЕСКАЯ, Д. 6,СТР. 1, СТР. 1, ЗАЛ 2 КАБ. 2 РАБ. МЕСТО 2
          </p>
        </div>
        <div className="mt-4">
          <h4>Реквизиты</h4> <br />
          <p className="text-slate-400">
            {" "}
            ООО «СМАРТСОЛЮШНС» <br />
            ИНН/КПП 7802948843/780201001
            <br />
            ОГРН 1247800001591
          </p>
        </div>
        <div className="mt-4">
          <h4>При поддержке</h4> <br />
          <p className="text-slate-400">
            <img src="images/ФондМ.jpg" alt="Логотип ФондМ" width={380}/>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
