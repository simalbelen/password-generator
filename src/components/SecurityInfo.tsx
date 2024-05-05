import { Chip, Image } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import zxcvbn, { ZXCVBNResult } from 'zxcvbn'
import Security0Image from './Images/Security0'

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
                    <Image
                        classNames={{ img: 'h-full', wrapper: 'h-4/6' }}
                        alt="Security level 1"
                        src="Lvl1.svg"
                    />
                    <Chip size="lg" className="bg-orange-400 text-black">
                        {t('insecure')}
                    </Chip>
                </>
            ) : null}
            {security.score === 2 ? (
                <>
                    <Image
                        classNames={{ img: 'h-full', wrapper: 'h-4/6' }}
                        alt="Security level 2"
                        src="Lvl2.svg"
                    />
                    <Chip size="lg" className="bg-yellow-400 text-black">
                        {t('normal')}
                    </Chip>
                </>
            ) : null}
            {security.score === 3 ? (
                <>
                    <Image
                        classNames={{ img: 'h-full', wrapper: 'h-4/6' }}
                        alt="Security level 3"
                        src="Lvl3.svg"
                    />
                    <Chip size="lg" className="bg-lime-400 text-black">
                        {t('secure')}
                    </Chip>
                </>
            ) : null}
            {security.score === 4 ? (
                <>
                    <Image
                        classNames={{ img: 'h-full', wrapper: 'h-4/6' }}
                        alt="Security level 4"
                        src="Lvl4.svg"
                    />
                    <Chip size="lg" className="bg-green-400 text-black">
                        {t('very-secure')}
                    </Chip>
                </>
            ) : null}
            Time to crack:{' '}
            {security.crack_times_display.online_no_throttling_10_per_second}
        </div>
    )
}

export default SecurityInfo
