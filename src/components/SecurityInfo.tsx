import { Chip } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import zxcvbn, { ZXCVBNResult } from 'zxcvbn'
import Security0Image from './Images/Security0'
import Security1Image from './Images/Security1'
import Security2Image from './Images/Security2'
import Security3Image from './Images/Security3'
import Security4Image from './Images/Security4'

interface SecurityInfoProps {
    password: string
}

function SecurityInfo({ password }: SecurityInfoProps) {
    const { t } = useTranslation()
    const [security, setSecurity] = useState<ZXCVBNResult>(zxcvbn(password))

    useEffect(() => {
        setSecurity(zxcvbn(password))
    }, [password])

    return (
        <div className=" w-full h-full flex flex-col items-center justify-around p-4">
            {security.score === 0 ? (
                <>
                    <Security0Image color={'currentColor'} />
                    <Chip size="lg" className="bg-red-400 text-black">
                        {t('very-insecure')}
                    </Chip>
                </>
            ) : null}
            {security.score === 1 ? (
                <>
                    <Security1Image color={'currentColor'} />
                    <Chip size="lg" className="bg-orange-400 text-black">
                        {t('insecure')}
                    </Chip>
                </>
            ) : null}
            {security.score === 2 ? (
                <>
                    <Security2Image color={'currentColor'} />
                    <Chip size="lg" className="bg-yellow-400 text-black">
                        {t('normal')}
                    </Chip>
                </>
            ) : null}
            {security.score === 3 ? (
                <>
                    <Security3Image color={'currentColor'} />
                    <Chip size="lg" className="bg-lime-400 text-black">
                        {t('secure')}
                    </Chip>
                </>
            ) : null}
            {security.score === 4 ? (
                <>
                    <Security4Image color={'currentColor'} />
                    <Chip size="lg" className="bg-green-400 text-black">
                        {t('very-secure')}
                    </Chip>
                </>
            ) : null}
            <span>{t('crack-time')}</span>
            {security.crack_times_display.online_no_throttling_10_per_second}
        </div>
    )
}

export default SecurityInfo
